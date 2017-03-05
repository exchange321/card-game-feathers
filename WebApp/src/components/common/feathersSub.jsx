import React, { PropTypes, Component } from 'react'
import app from '../../feathers';

const feathersSub = (service) => (
  WrappedComponent => {
    return class Sub extends Component {
      constructor(props, context) {
        super(props, context);
        this.state = {
          [service]: [],
        };
      }

      componentDidMount() {
        this[service] = app.service(service)
          .rx({ idField: '_id' })
          .find()
          .subscribe((data) => {
            this.setState({ [service]: data.data });
          });
      }

      componentWillUnmount() {
        this[service].unsubscribe();
      }

      render() {
        return (
          <WrappedComponent { ...this.state } />
        );
      }
    }
  }
);

export default feathersSub;
