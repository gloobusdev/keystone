import Field from '../Field';
import React, { PropTypes } from 'react';
import { FormInput } from 'elemental';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './CTstyle.css';
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import cs from 'classnames';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

module.exports = Field.create({
	displayName: 'Custom Type',
	/* propTypes: {
		formatString: React.PropTypes.object,
	}, */
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
			this.state = {
				editorState,
			};
		}

		return {
			editorState,
			currentTab1: (this.props.options && this.props.options.tabs
				&& this.props.options.tabs[0] && this.props.options.tabs[0].ref) || "",
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

	onTab1Set(tabName) {
		console.log(tabName)
		this.setState({
			currentTab1: tabName
		});
	},

	renderField () {
		const { editorState, currentTab1 } = this.state;
		const { options } = this.props;
		const { tabs } = options;
		return (
			<div>
				<Flex column flex={1} alignItems="stretch">
					<Item row alignItems="stretch" flex={1} key={"primaryTabs"}>
						{tabs && tabs.map((tab, index) => {
							return (
								<Flex column alignItems="start" key={"primaryTabNumber"+index}
									className={cs(styles.tab, styles.noselect, (tab.ref === currentTab1) ? styles.active : null)}
									onClick={(ev)=>{this.onTab1Set(tab.ref)}}
								>
									{tab.label}
								</Flex>
							);
						})}
					</Item>
					<Item row alignItems="stretch" flex={1} key={"primaryTabContents"}>
						{tabs && tabs.filter((tab, index) => (tab.ref === currentTab1))
							.map((tab, index) => {
								return (
									<Flex column alignItems="start" flex={1} key={"primaryTabContentNumber"+index}
										className={cs(styles.tabContent)}
									>
										{tab.ref + " === " + currentTab1 + " -> " }
									</Flex>
								);
							}
						)
					}
					</Item>
				</Flex>

				<div style={Object.assign({}, this.props.globalStyle, {
					border: "1px solid gray",
					backgroundColor: "white",
				})}>
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
					style={Object.assign({}, this.props.globalStyle, {
						border: "1px solid gray",
						width: "100%",
					})}
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
