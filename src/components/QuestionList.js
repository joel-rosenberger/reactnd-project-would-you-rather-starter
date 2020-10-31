import { react, Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionList extends Component {
    render() {
        return <li role="presentation" 
        class={this.props.questionFilter===QUESTION_FILTER_ANSWERED?"active":""}>
            <a name={QUESTION_FILTER_ANSWERED} 
            onClick={this.handleFilterChange}>Answered
            </a>
        </li>
    }
}

function mapStateToProps() {

}

export default connect(mapStateToProps)(QuestionList)