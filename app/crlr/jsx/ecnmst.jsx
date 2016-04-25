
import React from 'react';

export var greet = function () {
    return 'Hello World!';
};

export var bye = function () {
    return 'See ya!';
};


/**
 * Class ArticleCrawler
 */
class ArticleCrawler {
  constructor(url) {
    this.url = url;
  }
}


/**
 * class EconomistCrawler
 * https://facebook.github.io/react/docs/reusable-components.html#es6-classes
 */
export class EconomistCrawler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    
  }
  
  render() {
    return (
        <div class="economistCrawler">
            <input type="text" name="ecnmst_input" />
            <button id="ecnmst_submit">load article</button>
        </div>
    );
  }
}

// static variables
EconomistCrawler.defaultProps = {}
