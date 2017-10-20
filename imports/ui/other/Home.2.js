import React from 'react';


import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import HeaderPrivate from './HeaderPrivate';
import DashboardLog from './DashboardLog';


export default class Home extends React.Component{
    render(){
        return (
            <div>
               <div className="container-fluid">
                <HeaderPrivate/>
                </div>
                <div className="container-fluid row">
                    <div className="col-3">
                    <SidebarLeft/>
                    </div>
                    <div className="col-6">
                    <DashboardLog/>
                    </div> 
                    <div className="col-3">
                        <SidebarRight/>
                    </div>
                </div>
            </div>
                    
        );
                    
    }
}








    