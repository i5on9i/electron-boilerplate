

import React from 'react';
import {ajax} from '../utils/utils'

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
    this._onButtonClickListener = this._onButtonClickListener.bind(this);
    
  }
  
  render() {
    return (
        <div class="economistCrawler">
            <input type="text" name="ecnmst_input" ref="url"/>
            <button id="ecnmst_submit" onClick={this._onButtonClickListener}>load article</button>
        </div>
    );
  }
  
  _onButtonClickListener(event){
        // retrive the page
        ajax({
            type: 'GET',
            url: this.refs.url.value,
            success: (r)=>{
                console.log(r)
                return
            }
        })
        

        // extract the contents                        
  }
  
}

// static variables
EconomistCrawler.defaultProps = {}
