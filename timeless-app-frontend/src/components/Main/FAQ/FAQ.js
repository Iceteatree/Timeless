import React, { useState } from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './FAQ.css'


// Simple stateless functional component that basically renders a nice FAQ page.
function FAQ() {
    // Brain was tired so I just used the useState hook to create some state functionality. Yes it's ugly I know.
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);

    // Toggle functions that toggle the state true and false.
    const toggle1 = () => setIsOpen1(!isOpen1);
    const toggle2 = () => setIsOpen2(!isOpen2);
    const toggle3 = () => setIsOpen3(!isOpen3);
    const toggle4 = () => setIsOpen4(!isOpen4);
    const toggle5 = () => setIsOpen5(!isOpen5);

    return (
        <div className='faq-class' id="faq-id">
            <h1>Frequently asked questions</h1>
            <br />
            <Button className="btn-faq btn-lg btn-dark" onClick={toggle1} style={{ marginBottom: '1rem' }}>Who makes these watches?</Button>
            <Collapse isOpen={isOpen1}>
                <Card className="card-faq">
                <CardBody>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. 
                </CardBody>
                </Card>
            </Collapse>
            <Button className="btn-faq btn-lg btn-dark" onClick={toggle2} style={{ marginBottom: '1rem'}}>When can I receive my goods?</Button>
            <Collapse isOpen={isOpen2}>
                <Card className="card-faq">
                <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </CardBody>
                </Card>
            </Collapse>
            <Button className="btn-faq btn-lg btn-dark" onClick={toggle3} style={{ marginBottom: '1rem'}}>Do you deliver worldwide?</Button>
            <Collapse isOpen={isOpen3}>
                <Card className="card-faq">
                <CardBody>
                Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </CardBody>
                </Card>
            </Collapse>
            <Button className="btn-faq btn-lg btn-dark" onClick={toggle4} style={{ marginBottom: '1rem'}}>Can I get a discount?</Button>
            <Collapse isOpen={isOpen4}>
                <Card className="card-faq">
                <CardBody>
                Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos  sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.
                </CardBody>
                </Card>
            </Collapse>
            <Button className="btn-faq btn-lg btn-dark" onClick={toggle5} style={{ marginBottom: '1rem'}}>Can I get a custom watch made?</Button>
            <Collapse isOpen={isOpen5}>
                <Card className="card-faq">
                <CardBody>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                </CardBody>
                </Card>
            </Collapse>
            <div className="faq-bottom-image">
                
            </div>
        </div>
    )
}

export default FAQ
