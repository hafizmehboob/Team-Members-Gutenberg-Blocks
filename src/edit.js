import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({attributes}) {
	const {text} =  attributes;
	console.log(text);
	return (
		<>
			<p { ...useBlockProps() }>{text}</p>
		</>
	);
}
