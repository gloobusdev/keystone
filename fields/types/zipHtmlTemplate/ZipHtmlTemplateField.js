/**
TODO:
- Format size of stored file (if present) using bytes package?
- Display file type icon? (see LocalFileField)
*/

import Field from '../Field';
import React, { PropTypes } from 'react';
import { Button, FormField, FormInput, FormNote } from 'elemental';
import FileChangeMessage from '../../components/FileChangeMessage';
import HiddenFileInput from '../../components/HiddenFileInput';
import styles from './ZipHtmlTemplateStyle.css';
import stylesCommon from '../CommonStyle.css';
import TabRow from '../TabRow';
import cs from 'classnames';
import nesProp from 'nested-property';
import { Flex, Item } from 'react-flex';

const FileThumb = ({ url, htmlPath, options }) => {
	var urlPrefix = options.publicAccessUrlPrefix || '/'

	return (
		htmlPath ?
		<div style={{
			width: "100%",
			height: "500px",
			marginRight: 10,
			flexShrink: 0
		}}>
			<label className={styles.formLabel}>Preview</label>
			<iframe
				style={{
					width: "100%",
					height: "100%",
					flexShrink: 0,
					backgroundColor:"white"
				}}
				frameBorder={"0"}
				src={ urlPrefix + htmlPath }
			/>
		</div> : <div>Save record for preview</div>)
};

const FileHtmlDom = ({ url, htmlPath, options }) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<FileThumb {...{ url, htmlPath, options }}/>
		</div>
	);
};

let uploadInc = 1000;

const buildInitialState = (props, index) => ({
	action: null,
	removeExisting: false,
	uploadFieldPath: `File-${props.path}.${index}-${++uploadInc}`,
	userSelectedFile: null,
});
//.${index}

module.exports = Field.create({
	propTypes: {
		autoCleanup: PropTypes.bool,
		collapse: PropTypes.bool,
		label: PropTypes.string,
		note: PropTypes.string,
		path: PropTypes.string.isRequired,
		value:
			PropTypes.shape(
			[
				{
					filename: PropTypes.string,
				},
				{
					filename: PropTypes.string,
				},
				{
					filename: PropTypes.string,
				},
			]
			),

	},
	getInitialState () {
		return {
			stack: [buildInitialState(this.props,0), buildInitialState(this.props,1), buildInitialState(this.props,2)],
			currentTab: 0,
			tabs: [{value: "nl", label: "nl"},{value: "fr", label: "fr"},{value: "en", label: "en"}]
		}
	},
	shouldCollapse () {
		return this.props.collapse && !this.hasExisting(0) && !this.hasExisting(1) && !this.hasExisting(2);
	},
	componentWillUpdate (nextProps) {
		var {currentTab} = this.state

		const value = nesProp.get(this ,"props.value." + currentTab) || {};
		const nextVal = nesProp.get(nextProps ,"props.value." + currentTab) || {};
		// Show the new filename when it's finished uploading
		if (value.filename !== nextVal.filename) {

			var state = {...this.state, stack: this.state.stack || []};
			state.stack[currentTab] = buildInitialState(this.props, currentTab)

			this.setState(state);
		}
	},

	// ==============================
	// HELPERS
	// ==============================

	hasFile (index) {
		return !!this.getFilename(index); // || !!nesProp.get(this, "state.stack."+index+".userSelectedFile");
	},
	hasFileAttempt (index) {
		return nesProp.get(this, "state.stack."+index+".userSelectedFile") && !this.getFilename(index);
	},
	hasRemoveAttempt (index) {
		return this.state.stack[index].removeExisting && this.hasFile(index);
	},
	hasExisting (index) {
		let htmlPathPath = this.props.path.split('.').slice(0, -1).join('.')+'.htmlPath.'+index
		return !!this.props.values[htmlPathPath];
	},
	getFilename (index) {
		let zipPathPath = this.props.path.split('.').slice(0, -1).join('.')+'.zipPath.'+index
		return this.props.values[zipPathPath]
	},
	getHtmlFilename (index) {
		let htmlPathPath = this.props.path.split('.').slice(0, -1).join('.')+'.htmlPath.'+index
		return this.props.values[htmlPathPath]
	},

	// ==============================
	// METHODS
	// ==============================

	triggerFileBrowser (index) {
		this.fileInput && this.fileInput[index] && this.fileInput[index].clickDomNode();
	},
	handleFileChange (event, index) {
		const userSelectedFile = event.target.files[0];

		var state = {...this.state, stack: this.state.stack || []};
		state.stack[index]["userSelectedFile"] = userSelectedFile
		state.stack[index]["removeExisting"] = false

		this.setState(state);
	},
	handleRemove (e, index) {
		var state = {...this.state, stack: this.state.stack || []};

		state.stack[index] = buildInitialState(this.props, index);
		state.stack[index].removeExisting = true;
		state.stack[index].action = 'delete';

		this.setState(state);
	},
	previewPdf (index) {
		const {options} = this.props
		let innerOptions = options && options.options || {}

		let htmlPathPath = this.props.path.split('.').slice(0, -1).join('.')+'.pdfPath.'+index
		let htmlPath = innerOptions.publicAccessUrlPrefix + this.props.values[htmlPathPath]

		window.open(htmlPath, '_blank')
	},
	downloadZip (index) {
		const {options} = this.props
		let innerOptions = options && options.options || {}

		let zipPath = innerOptions.publicAccessUrlPrefix + this.getFilename(index)

		window.open(zipPath, '_blank')
	},

	// ==============================
	// RENDERERS
	// ==============================

	renderFileNameAndChangeMessage (index) {
		const { value, options } = this.props;
		let url;
		let filename;

		// if this is a zipped html template then must has an extracted html path
		let htmlPath = ''

		let htmlPathPath = String(this.props.path).split('.').slice(0, -1).join('.')+'.htmlPath.'+index
		htmlPath = this.props.values[htmlPathPath]

		if (this.hasFile(index) && !this.hasRemoveAttempt(index)) {
			url = value[index] && value[index].url;
			filename = this.getFilename(index);
		}

		return (
			<div>
				{this.hasFileAttempt(index) && this.renderChangeMessage(index)}
				{this.hasRemoveAttempt(index) && this.renderChangeMessage(index)}
			</div>
		);
	},
	renderPreview (index) {
		const { value, options } = this.props;
		let url;
		let filename;
		let innerOptions = options && options.options || {}

		// if this is a zipped html template then must has an extracted html path
		let htmlPath = ''

		let htmlPathPath = String(this.props.path).split('.').slice(0, -1).join('.')+'.htmlPath.'+index
		htmlPath = this.props.values[htmlPathPath]

		if (this.hasExisting(index) && !this.hasRemoveAttempt(index)) {
			url = value[index] && value[index].url;
			filename = this.getHtmlFilename(index);
		}

		return (
			<div>
				{filename && <FileHtmlDom {...{ url, filename, htmlPath, options: innerOptions }}/>}
			</div>
		);
	},
	renderChangeMessage (index) {
		if (this.state.stack[index].userSelectedFile) {
			return (
				<FileChangeMessage type="success">
					File selected - save to upload
				</FileChangeMessage>
			);
		} else if (this.hasRemoveAttempt(index)) {
			return (
				<FileChangeMessage type="danger">
					File {this.props.autoCleanup ? 'deleted' : 'removed'} - save to confirm
				</FileChangeMessage>
			);
		} else {
			return null;
		}
	},
	renderClearButton (index) {
		var clearText = 'Remove File';
		return (
			<Button type="link-cancel" onClick={(e) => this.handleRemove(e, index)}>
				{clearText}
			</Button>
		);
	},
	renderPdfButton (index) {
		return (
			<Button type="link" onClick={()=>this.previewPdf(index)}>
				Preview as PDF
			</Button>
		);
	},
	renderZipButton (index) {
		var zipPath = this.getFilename(index)

		return (
			<Button type="link" onClick={()=>this.downloadZip(index)}>
				{zipPath}
			</Button>
		);
	},
	renderActionInput (index) {
		// If the user has selected a file for uploading, we need to point at
		// the upload field. If the file is being deleted, we submit that.
		if (this.state.stack[index].userSelectedFile || this.state.stack[index].action) {
			const value = this.state.stack[index].userSelectedFile
				? `upload:${index}:${this.state.stack[index].uploadFieldPath}`
				: ((this.state.stack[index].action === `delete` || (this.state.stack[index].action === `reset`)) ? `remove:${index}` : 'aa');
			return (
				<input
					name={this.getInputName(String(this.props.path))}
					type="hidden"
					value={value}
				/>
			);
		} else {
			return null;
		}
	},
	/**
	 * Event handling for tab change. Convert sting value to an object and save it in the state.
	 * @param {*} tabName
	 */
	onTabSet(tabName) {
		var currentTab = 0
		this.state.tabs.forEach(function(val, ind){
			val.value === tabName ? currentTab = ind : currentTab
		})

		this.setState({
			currentTab: currentTab
		});
	},
	buttons(index) {
		return (
			<div style={this.hasFile(index) ? { marginTop: '1em' } : null}>
				{this.hasFile(index) && !this.hasRemoveAttempt(index) && this.renderZipButton(index)}
				<Button onClick={() => this.triggerFileBrowser(index)}>
					{this.hasFile(index) ? 'Change' : 'Upload'} document template
				</Button>
				{(this.hasFile(index) || this.hasFileAttempt(index)) && !this.hasRemoveAttempt(index) && this.renderClearButton(index)}
				{this.hasFile(index) && !this.hasRemoveAttempt(index) && this.renderPdfButton(index)}
			</div>
	)},
	renderUI () {
		var currentTab = this.state.currentTab
		var selectedTab = this.state.tabs[currentTab]

		return (
			<div data-field-name={this.props.path}
				data-field-type="file"
			>
			<label className={styles.formLabel}>{this.props.label}</label>
			<TabRow
				key={"keyOneTabRow"}
				onChange={this.onTabSet}
				tabs={this.state.tabs }
				selected={selectedTab}
				className={cs(stylesCommon.holderForBlocks)}
			/>
				<Flex column flex={1} alignItems="stretch"
						className={cs(stylesCommon.tabContent)}>
					<FormField label={""} htmlFor={this.props.path}>
						{this.shouldRenderField() ? (
							<div>
								<div style={{display: currentTab == 0 ? 'flex' : 'none'}}>
									<Flex column flex={1} alignItems="column">
										<Flex column flex={1} alignItems="row">
											{this.renderFileNameAndChangeMessage(0)}
											{this.renderActionInput(0)}
											{this.buttons(0)}
										</Flex>
										<Flex column flex={1} alignItems="row">
											{this.hasExisting(0) && this.renderPreview(0)}
										</Flex>
									</Flex>
									<HiddenFileInput
										key={this.state.stack[0].uploadFieldPath}
										name={this.state.stack[0].uploadFieldPath}
										onChange={(event) =>this.handleFileChange(event, 0)}
										ref={el => {
											if (!this.fileInput) {
												this.fileInput = []
											}
											this.fileInput[0] = el;
										}}
									/>
								</div>
								<div style={{display: currentTab == 1 ? 'flex' : 'none'}}>
									<Flex column flex={1} alignItems="column">
										<Flex column flex={1} alignItems="row">
											{this.hasFileAttempt(1) && this.renderFileNameAndChangeMessage(1)}
											{this.renderActionInput(1)}
											{this.buttons(1)}
										</Flex>
										<Flex column flex={1} alignItems="row">
											{this.hasExisting(1) && this.renderPreview(1)}
										</Flex>
									</Flex>
									<HiddenFileInput
										key={this.state.stack[1].uploadFieldPath}
										name={this.state.stack[1].uploadFieldPath}
										onChange={(event) =>this.handleFileChange(event, 1)}
										ref={el => {
											if (!this.fileInput) {
												this.fileInput = []
											}
											this.fileInput[1] = el;
										}}
									/>
								</div>
								<div style={{display: currentTab == 2 ? 'flex' : 'none'}}>
									<Flex column flex={1} alignItems="column">
										<Flex column flex={1} alignItems="row">
											{this.hasFileAttempt(2) && this.renderFileNameAndChangeMessage(2)}
											{this.renderActionInput(2)}
											{this.buttons(2)}
										</Flex>
										<Flex column flex={1} alignItems="row">
											{this.hasExisting(2) && this.renderPreview(2)}
										</Flex>
									</Flex>
									<HiddenFileInput
										key={this.state.stack[2].uploadFieldPath}
										name={this.state.stack[2].uploadFieldPath}
										onChange={(event) =>this.handleFileChange(event, 2)}
										ref={el => {
											if (!this.fileInput) {
												this.fileInput = []
											}
											this.fileInput[2] = el;
										}}
									/>
								</div>
							</div>
						) : (
							<div>
								{this.hasFile(0) ? (
									this.renderFileNameAndChangeMessage(0)
								) : (
									<FormInput noedit>no files</FormInput>
								)}

								{this.hasFile(1) ? (
									this.renderFileNameAndChangeMessage(1)
								) : (
									<FormInput noedit>no files</FormInput>
								)}

								{this.hasFile(2) ? (
									this.renderFileNameAndChangeMessage(2)
								) : (
									<FormInput noedit>no files</FormInput>
								)}
							</div>
						)}
						{!!this.props.note && <FormNote note={this.props.note} />}
					</FormField>

				</Flex>
			</div>
		);
	},

});
