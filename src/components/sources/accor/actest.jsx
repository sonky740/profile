class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Only One Open</h2>
        <Accordion muitipleOpen={false}>
          <AccordionList expanded={true} id="1" key="1" headTitle="Title 1">
            Content 1
          </AccordionList>
          <AccordionList expanded={false} id="2" key="2" headTitle="Title 2">
            Content 2
          </AccordionList>
          <AccordionList expanded={false} id="3" key="3" headTitle="Title 3">
            Content 3
          </AccordionList>
          <AccordionList expanded={false} id="4" key="4" headTitle="Title 4">
            Content 4
          </AccordionList>
        </Accordion>

        <h2>Multiple Open</h2>
        <Accordion muitipleOpen={true}>
          <AccordionList expanded={false} id="1" key="1" headTitle="Title 1">
            Content 1
          </AccordionList>
          <AccordionList expanded={true} id="2" key="2" headTitle="Title 2">
            Content 2
          </AccordionList>
          <AccordionList expanded={false} id="3" key="3" headTitle="Title 3">
            Content 3
          </AccordionList>
          <AccordionList expanded={false} id="4" key="4" headTitle="Title 4">
            Content 4
          </AccordionList>
        </Accordion>

        <h2>Nested Accordion</h2>
        <Accordion muitipleOpen={false}>
          <AccordionList expanded={true} id="1" key="1" headTitle="Title 1">
            Content 1<br />
            <br />
            <Accordion muitipleOpen={false}>
              <AccordionList
                expanded={false}
                id="1"
                key="1"
                headTitle="Nested Title 1"
              >
                Content 1
              </AccordionList>
              <AccordionList
                expanded={false}
                id="2"
                key="2"
                headTitle="Nested Title 2"
              >
                Content 2
              </AccordionList>
              <AccordionList
                expanded={false}
                id="3"
                key="3"
                headTitle="Nested Title 3"
              >
                Content 3
              </AccordionList>
            </Accordion>
          </AccordionList>
          <AccordionList expanded={false} id="2" key="2" headTitle="Title 2">
            Content 2
          </AccordionList>
        </Accordion>
      </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activedIndex: this.getID(),
      acdTransition: false,
    };
  }

  getID() {
    let expandedIndex = [];
    let children = this.props.children;

    React.Children.map(children, (items, i) => {
      if (items.props.expanded) {
        expandedIndex.push(items.props.id);
      }
    });

    return expandedIndex;
  }

  addTransition() {
    if (this.state.acdTransition === true) {
      return "acd-transition";
    } else {
      return "";
    }
  }

  handleClick(acdID) {
    let muitipleOpen = this.props.muitipleOpen;
    let activedList = [...this.state.activedIndex];
    let activedItem = this.state.activedIndex.indexOf(acdID);

    if (muitipleOpen) {
      if (activedItem !== -1) {
        activedList.splice(activedItem, 1);
        this.setState({ activedIndex: activedList });
      } else {
        this.setState({ activedIndex: [...activedList, acdID] });
      }
    } else {
      if (activedItem !== -1) {
        activedList.splice(activedItem, 1);
        this.setState({ activedIndex: activedList });
      } else {
        this.setState({ activedIndex: [acdID] });
      }
    }

    if (this.state.acdTransition === false) {
      this.setState({ acdTransition: true });
    }
  }

  isExpanded(acdID) {
    if (this.state.activedIndex.includes(acdID)) {
      return "actived";
    } else {
      return "";
    }
  }

  render() {
    let childArr = this.props.children;

    if (childArr.length === undefined) {
      childArr = [this.props.children];
    }

    const items = childArr.map((child, i) => {
      //let newIndex = i + 1;
      return React.cloneElement(child, {
        isExpanded: this.isExpanded.bind(this),
        handleClick: this.handleClick.bind(this),
        addTransition: this.addTransition.bind(this),
      });
    });

    return <div className={`accordion-box`}>{items}</div>;
  }
}

class AccordionList extends React.Component {
  render() {
    return (
      <div
        className={`accordion-list ${this.props.isExpanded(
          this.props.id
        )} ${this.props.addTransition()}`}
      >
        <div
          className={`accordion-label`}
          onClick={() => {
            this.props.handleClick(this.props.id);
          }}
        >
          {this.props.headTitle} <span className="acd-arrow"></span>
        </div>
        <div className={`accordion-content`}>
          <div className="accordion-inner">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
