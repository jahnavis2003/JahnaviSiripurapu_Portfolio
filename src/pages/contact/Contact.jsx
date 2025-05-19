import React, { useState } from 'react';
import feedbackApi from '../../api/api';
import { ToastContainer, toast } from 'react-toastify';
import "./contact.css";
import { Loader2, Send } from 'lucide-react';
import ContactHeader from './ContactHeader';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  let [name, setName] = useState('');
  let [reviews, setReviews] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  var data = {
    "name": name,
    "reviews": reviews,
    "email": email,
    "phone": phone
  }

  const Status = {
    SUCCESS: 1,
    ERROR: 3,
    WARNING: 2,
    DEFAULT: 0,
  };
  
  const notify = (message, status) => {
    const toastMap = {
      [Status.SUCCESS]: toast.success,
      [Status.WARNING]: toast.warning,
      [Status.ERROR]: toast.error,
      [Status.DEFAULT]: toast,
    };
  
    (toastMap[status] || toast)(message);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!name.trim()) {
      notify("Please enter your name!", Status.WARNING);
      return;
    }
    if (!reviews.trim()) {
      notify("Please type something!", Status.WARNING);
      return;
    }
    setIsLoading(true);
    const response = await feedbackApi.submitFeedback(data);
    if(!response.success) {
      notify(response || "Something went wrong!", Status.ERROR);
      setIsLoading(false);
      return;
    }
    else {
      setName('');
      setReviews('');
      setEmail('');
      setPhone('');
      notify(response.message, Status.DEFAULT);
      setIsLoading(false);
      return;
    }
  }
  return (
    <div className='relative flex flex-col items-center justify-center overflow-y-auto scrollbar-hide min-h-screen '>
      <ContactHeader />
      <div className="flex flex-col justify-center items-center align-middle p-5 text-fuchsia-100 xxl:pt-32 pt-44">
        <p className="text-lg sm:text-xl md:text-lg w-[90vw] sm:w-3/4 text-center pb-10">
          {`Besides reaching me through LinkedIn, X, or Gmail,
          if you’d like, you can drop your email in the textbox below with any comments, feedback or collab ideas you have. 
          Constructive criticism is much appreciated, and I will definitely get in touch with you when I get some free time.`}
        </p>
        <form 
          onSubmit={handleSubmit}
          className="flex flex-col items-start w-[90vw] sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-auto bg-[rgba(255,157,234,0.1)] 
          shadow-[0_0_25px_5px_#80527460] rounded-2xl p-8"
        >
            <label className="block font-semibold mt-7 mb-1 text-lg" htmlFor="name">
              {`Name:`}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              className="w-full p-2 border rounded-md mb-3 border-neutral-700 
              disabled:cursor-not-allowed
              placeholder:text-neutral-600
              focus:outline-none 
              focus:ring-2 
              focus:ring-fuchsia-500/40
              focus:border-fuchsia-400/50
              bg-neutral-800
              focus:bg-neutral-700/80"
              // required
              placeholder="Enter your full name"
              onChange={(e)=>setName(e.target.value)}
              disabled={isLoading}
            />
            <label className="block font-semibold mb-1 text-lg" htmlFor="comments">
              {`Comments:`}
            </label>
            <textarea
              // required
              id="comments"
              value={reviews}
              className="w-full p-2 border rounded-md min-h-[10vh] max-h-[40vh] border-neutral-700 
              disabled:cursor-not-allowed
              placeholder:text-neutral-600
              focus:outline-none 
              focus:ring-2 
              focus:ring-fuchsia-500/40
              focus:border-fuchsia-400/50
              bg-neutral-800 
              focus:bg-neutral-700/80"
              placeholder="Enter your comments or feedback here"
              onChange={(e)=>setReviews(e.target.value)}
              disabled={isLoading}
            />

            <label className="block font-semibold mt-7 mb-1 text-lg" htmlFor="email">
              {`Email (optional):`}
            </label>
            <input
            value={email}
              type="email"
              id="email"
              className="w-full p-2 border rounded-md mb-3 border-neutral-700 
              disabled:cursor-not-allowed
              placeholder:text-neutral-600
              focus:outline-none 
              focus:ring-2 
              focus:ring-fuchsia-500/40
              focus:border-fuchsia-400/50
              bg-neutral-800
              focus:bg-neutral-700/80"
              placeholder="Enter your email"
              onChange={(e)=>setEmail(e.target.value)}
              disabled={isLoading}
            />
            <label className="block font-semibold mt-7 mb-1 text-lg" htmlFor="phone">
              {`Phone (optional):`}
            </label>
            <input
              value={phone}
              type="tel"
              id="phone"
              className="w-full p-2 border rounded-md mb-3 border-neutral-700 
              disabled:cursor-not-allowed
              placeholder:text-neutral-600
              focus:outline-none 
              focus:ring-2 
              focus:ring-fuchsia-500/40
              focus:border-fuchsia-400/50
              bg-neutral-800
              focus:bg-neutral-700/80"
              placeholder="Enter your phone number"
              onChange={(e)=>setPhone(e.target.value)}
              disabled={isLoading}
            />
            {/* Centered button with responsive width */}
            <div className="flex w-full justify-center mt-10">
              <button
                type="submit"
                className={`flex items-center justify-center gap-2 buttonStyle p-2 px-0 w-1/2 sm:w-1/3 md:w-1/5 bg-[rgba(113,99,110,1)] text-white rounded-lg 
                ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#7c6076] hover:shadow-[_0_11px_11px_-5px_rgba(113,99,110,0.7)] transition-all duration-300 hover:scale-110'}`}
              > 
                {isLoading ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <>
                    <Send size={20} />
                    Submit
                  </>
                )}
              </button>
            </div> 
            <ToastContainer 
                toastClassName={ "bg-stone-900 relative flex p-5 min-h-10 w-auto rounded-md justify-between items-center overflow-hidden cursor-pointer" }
                position="top-right"
                theme="dark"
                pauseOnHover
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
            />
        </form>
      </div>
    </div>
    
  )
}

export default Contact;
