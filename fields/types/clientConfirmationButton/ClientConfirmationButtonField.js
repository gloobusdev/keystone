import React from 'react';
import Field from '../Field';
import xhr from 'xhr';
import { FormField, Button } from 'elemental';
import moment from 'moment';

module.exports = Field.create({
	displayName: 'ButtonField',
	statics: {
		type: 'Button',
	},
	propTypes: {
		// indent: React.PropTypes.bool,
		label: React.PropTypes.string,
		path: React.PropTypes.string.isRequired,
	},

	getInitialState () {
		return {
			refreshRequest: false
		}
	},

	onRefreshHashHandler() {
		const hash = this.props.values.emailHash;
		xhr({
			url: '/refreshClientHash',
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({hash}),
			responseType: 'json'
		}, (err, resp, data) => {
			if(data.success == true){
				this.setState({refreshRequest: true});
			}
		} )
	},

	renderUI () {
		const { indent, values, label, path } = this.props;
		let success
		if(this.state.refreshRequest){
			const now = moment().format('MMMM Do YYYY, h:mm:ss');
			success = <span style={{ marginLeft: '.75em' }}>Hash and Token refreshed {now}</span>;
		}
		return (
			<div data-field-name={path} data-field-type="boolean">
				<FormField offsetAbsentLabel={indent}>
					<label style={{ height: '2.3em' }}>
						{/* {this.renderFormInput()} */}
						<Button disabled = {!values.approvedAt} onClick={this.onRefreshHashHandler}>{label}</Button>
					</label>
					{success}
				</FormField>
			</div>
		);
	},
});
