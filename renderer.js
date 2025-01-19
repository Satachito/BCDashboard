main.onData(
	( _, $, file ) => {}
)

main.onMenu(
	( _, $ ) => {
/*
console.log( 'onMenu', $ )

		const
		_Save = _ => main.invoke( _, TextArea.value ).then(
			file => file && (
				snapshot = TextArea.value
			,	document.title = file
			)
		)

		switch ( $ ) {
		case 'Save':
			_Save( 'save' )
			break
		case 'SaveAs':
			_Save( 'saveAs' )
			break
		}
*/
	}
)

onbeforeunload = ev => ev.preventDefault()
