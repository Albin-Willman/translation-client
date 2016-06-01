
import React from 'react';
import TranslationItem from 'components/TranslationItem';
import Table from 'react-bootstrap/lib/Table';
import Button from 'react-bootstrap/lib/Button';

export default class TranslationList extends React.Component {

    static defaultProps = {
        from: '',
        to: '',
        items: React.PropTypes.obj,
        handleChange: React.PropTypes.func.isRequired,
        submit: React.PropTypes.func.isRequired,

    }

    render() {

        var { items, from, to, handleChange, submit } = this.props;
        var rows = [];
        for (var key in items) {
            var item = items[key];
            rows.push(<TranslationItem key={key}
                stringKey={key}
                base={item[from]}
                translation={item[to]}
                handleChange={handleChange} />);
        }


        return (
            <div>
            <Table>
                <tbody>
                    {rows}
                </tbody>
            </Table>
                <Button block bsStyle={'primary'} onClick={submit}>
                  Save
                </Button>
            </div>
        );
    }
}
