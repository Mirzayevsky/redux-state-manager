import React,{useState} from "react";
import { Layout } from "antd";
import {items} from "../../Constants/layout"
import { Container, Icon, LinkWrapper, Logo, PathName } from "./styles";
const {Sider} = Layout
const Sidebar = () =>{
  const [collapsed, setCollapsed] = useState(false);
    return(
       <Sider collapsible coll apsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
         <Container>
            <Logo>State manag</Logo>
           {items.map((item)=>(
                <LinkWrapper to={item.link} key={item.id} >
                <PathName>{item.name}</PathName>
                <Icon>{item.icon}</Icon>
                </LinkWrapper>
            ))}
        </Container>
       </Sider>
    )
}
export default Sidebar