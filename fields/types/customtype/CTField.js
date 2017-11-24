import Field from '../Field';
import React, { PropTypes } from 'react';
import { FormInput } from 'elemental';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

module.exports = Field.create({
	displayName: 'Custom Type',
	propTypes: {
		path: PropTypes.string.isRequired,
		value: PropTypes.object,
	},
	statics: {
		type: 'CT',
	},

	focusTargetRef: 'customEditor',

	getInitialState() {
		const html = this.props.value && this.props.value.html || '<p>Hey this <strong>editor</strong> rocks 😀</p>';
		const contentBlock = htmlToDraft(html);
		let editorState = EditorState.createEmpty();
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			editorState = EditorState.createWithContent(contentState);
			/* this.state = {
				editorState,
			}; */
		}
		return {
			editorState,
		};
	},

	getDefaultProps () {
		return {
			moduleList: [
				{
					id: "MODA",
					name: "Clients -> Profile",
				},
				{
					id: "MODB",
					name: "Clients -> Policy details",
				},
				{
					id: "MODC",
					name: "Clients -> Damage detail",
				},
			],
			variablesList: [
				{
					id: "VAR1",
					name: "Pakket",
				},
				{
					id: "VAR2",
					name: "bemiddelaarsnummer",
				},
				{
					id: "VAR3",
					name: "naam VN",
				},
			],
			relationList: [

			]
		};
	},

	onEditorStateChange(editorState) {
		// Editor state save
		this.setState({
		  editorState,
		});

		// support value for keystone
		this.props.onChange({
			path: this.props.path,
			value: {html: editorState.getCurrentContent()},
		});
	},

	renderField () {

		const style = {
			border: "1px solid gray",
			backgroundColor: "white",
		}

		const style2 = {
			border: "1px solid gray",
			width: "100%",
		}

		const { editorState } = this.state;

	/* 	<FormInput
		name={this.getInputName(this.props.path)}
		ref="focusTarget"
		value={this.props.value}
		onChange={this.valueChanged}
		autoComplete="off"
		type="email"
	/> */

		return (
			<div>
				<div style={Object.assign({}, this.props.globalStyle, style)}>
					<Editor
						editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="demo-wrapper"
						editorClassName="demo-editor"
						onEditorStateChange={this.onEditorStateChange}
						toolbar={{
							inline: { inDropdown: true },
							list: { inDropdown: true },
							textAlign: { inDropdown: true },
							link: { inDropdown: true },
							history: { inDropdown: true },
						}}

						// name={this.getInputName(this.props.path)}
					/>
				</div>

				<textarea
					disabled
					style={Object.assign({}, this.props.globalStyle, style2)}
					value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
					name={this.getInputName(this.props.path)}
					ref="customEditor"
				/>



			</div>
		);
	},
	renderValue () {
		return this.props.value ? (
			<FormInput noedit href={'mailto:' + this.props.value}>{this.props.value}</FormInput>
		) : (
			<FormInput noedit>(not set)</FormInput>
		);
	},
});
