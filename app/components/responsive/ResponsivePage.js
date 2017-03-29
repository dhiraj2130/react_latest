var React = require('react');
 require('../../scss/responsive.scss');

var ResponsivePage = React.createClass({
    render:function(){
        "use strict";
        return(
            <div >
             <div className='responsiveStyle'> This is responsive page</div>

            </div>
        )
    }
})
module.exports = ResponsivePage;