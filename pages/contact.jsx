import { useState } from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiBriefcase, HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import { Modal } from 'antd';
import Footer from '../components/Footer';
import axios from 'axios';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(null);

  // Handle form data change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: 'bfdc5c39-c9d4-4602-ac53-10e84a345f54', // Replace with your Web3Forms access key
        ...formData
      });

      if (response.status === 200) {
        setFormSuccess(true);
        setIsOpen(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormSuccess(false);
      setIsOpen(true);
    } finally {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    }
  };

  return (
    <BannerLayout>
      <div className=" px-4 py-2">
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className='text-lg font-bold'>Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            {/* Contact Information */}
            <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className='md:text-base'>Country:</span>
                <span className='text-LightGray md:text-sm'>Philippines</span>
              </div>
              <div className="flex justify-between items-center">
                <span className='md:text-base'>City:</span>
                <span className='text-LightGray md:text-sm'>Valenzuela</span>
              </div>
              <div className="flex justify-between items-center">
                <span className='md:text-base'>School:</span>
                <span className='text-LightGray md:text-sm'>FEU Institute of Technology</span>
              </div>
            </div>
            <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
              <div className="flex justify-between items-center">
                <span className='md:text-base'>Email:</span>
                <span className='text-LightGray text-sm'>jcfrancisco1234@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className='md:text-base'>Linkedin:</span>
                <span className='text-LightGray text-sm'>jcsamsonfrancisco</span>
              </div>
              <div className="flex justify-between items-center">
                <span className='md:text-base'>Phone:</span>
                <span className='text-LightGray text-sm'>+(639) 42 029 3838</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/wan1carlos" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://edith.feutech.edu.ph/briefcase/profile/jcfrancisco" target='_blank' rel="noreferrer"><HiBriefcase /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.facebook.com/jc.francisco343" target='_blank' rel="noreferrer"><FaFacebook /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/jcsamsonfrancisco" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                </div>
        {/* Contact Form */}
        <div className="my-12 w-full h-auto text-Snow">
          <h1 className='text-lg font-bold'>Get In Touch</h1>
          <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
            <form onSubmit={handleSubmit}>
              <div>
                <div className="flex flex-col w-full">
                  <div className="userIcon relative mb-6">
                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                      <HiUser />
                    </div>
                    <input 
                      type="text" 
                      name="name"
                      className="input_stylings" 
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="mailIcon relative mb-6">
                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                      <HiMail />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      className="input_stylings" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col w-full">
                  <div className="textIcon relative mb-6">
                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                      <BsChatTextFill />
                    </div>
                    <textarea 
                      rows={6} 
                      cols={50} 
                      name="message"
                      className="input_stylings" 
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="my-4">
                  <button 
                    type="submit" 
                    className="button" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
        centered
        open={isOpen}
        footer={null}
        closable={false}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
      >
        <div className='flex flex-col items-center justify-center'>
          {formSuccess ? (
            <>
              <h1 className='text-Green font-bold text-2xl'>Success</h1>
              <a className='underline text-Snow'>Message Sent Successfully!</a>
            </>
          ) : (
            <>
              <h1 className='text-red-500 font-bold text-2xl'>Error</h1>
              <a className='underline text-Snow'>Something went wrong. Please try again later.</a>
            </>
          )}
        </div>
      </Modal>

      <Footer />
    </BannerLayout>
  );
};

export default Contact;
