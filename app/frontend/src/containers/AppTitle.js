import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import * as AppTitleActions   from '../actions/AppTitle';
import AppTitleComponent      from '../components/AppTitle';


function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(AppTitleActions, dispatch),
	};
}

function mapStateToProps(state) {
	return {
		title: state.AppTitle.title,
    text: state.AppTitle.text
	};
}

export default connect(
	mapStateToProps,
  mapDispatchToProps
)(AppTitleComponent);
