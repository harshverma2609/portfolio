
import CGPAChart from './Chart';
import './Education.css';

function Education(){
    return(
        <section id='Qualification'>
            <h2>Educational Qualifications</h2>
            <div>
                <a href='https://www.dtu.ac.in/'><img src={require("./images/DTU_Delhi_official_logo.png")} alt='DTU LOGO' /></a>
                <div className='education' id='DTU'>
                    <h2>
                        Delhi Technological University (DTU)
                        <br/>
                        Formerly Delhi College of Engineering
                        <br/>
                        Shahbad DaulatPur, Bawana
                    </h2>
                    <h3>Bachelor Of Technology <br/> Information Technology <br/> 2021-2025</h3>
                    <h3>CGPA: 8.25/10.00</h3>
                </div>
                <CGPAChart/>
            </div>
            <div>
                <a href='https://davpushpanjali.in/'><img src={require("./images/DAV LOGO.png")} alt='D.A.V LOGO' /></a>
                <div className='education'>
                    <h2>
                        D.A.V. Public School
                        <br/>
                        Pushpanjali Enclave
                    </h2>
                    <h3>AISSCE/CBSE <br/> Class XII <br/> 2021</h3>
                    <h3>Percentage: 94.2%</h3>
                </div>
                <div className='education'>
                    <h2>
                        D.A.V Public School
                        <br/>
                        Pushpanjali Enclave
                    </h2>
                    <h3>AISSE/CBSE <br/> Class X <br/> 2019</h3>
                    <h3>Percentage: 92.2%</h3>
                </div>
            </div>
        </section>
    );
}

export default Education;
