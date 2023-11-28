import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="chevron-right" className="me-3" />
                BLANCE STUDIO
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Drawing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Design
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Architecture
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Engineering
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Explore</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Team Member
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Portfolio
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Kanchanaphisek Rd, Bang Yai District, Nonthaburi 11140, Thailand
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                blance_project@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 084 696 6727 
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 095 463 4806
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      <a className='text-reset fw-bold' href=''>
        BLANCE | Architecture & Engineering
        </a>
        <pre>&copy; 2023 All rights reserved. Unauthorized use of digital media is prohibited.</pre>  
      </div>
    </MDBFooter>
  );
}

export default Footer;