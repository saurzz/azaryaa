import React from 'react';
import MetamaskBtn from './MetamaskBtn'
import Navbar1 from './Navbar1';
import CarouselsTemp from './Carousels'
const Home = () => {

  return (
    <div>
    <Navbar1 />

    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <div className="mx-auto px-auto">

          {/* <h1 class="display-5 fw-bold">Custom jumbotron</h1> */}
          <p className="col-md-10 fs-5">An AI-driven Telegram bot that effortlessly tackles project questions, updates its knowledge base with admin input, and smartly adapts to your whitepaper or website content. Discover a new level of convenience and efficiency in project support through Telegram.

</p>
<p className="col-md-10 fs-5">
The bot learns all about your project and can chat with users just like a real person would. This means clear, friendly, and efficient communication for your users. The best part? While the bot is busy answering questions and keeping users informed, you're free to focus on the important tasks that move your project forward.

</p>
          <MetamaskBtn />
        </div>
      </div>
    </div>
        
  
    <div className="p-2  bg-body-tertiary rounded-3">
      <div className="container-fluid ">
        <div className="mx-auto px-auto">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">
The features of the bot are : 
</h5>
   <ul className="card-text">
  <li>Integrates directly into Telegram for convenient user access</li>
  <li>Natural language processing for friendly conversations</li>
  <li>Learns project details from whitepaper, website, and moderator inputs</li>
  <li>Answers community questions accurately day and night</li>
  <li>Reduces repetitive tasks for human team members</li>
  <li>Scales conversations as the community grows</li>
  <li>Provides metrics to identify knowledge gaps</li>
</ul>

  </div>
</div>
</div>
</div>
</div>


{/*  */}
<div className="p-2  bg-body-tertiary rounded-3">
      <div className="container-fluid ">
        <div className="mx-auto px-auto">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">
    Benefits: 
</h5>
   <ul className="card-text">
    <li>24/7 global community support</li>
    <li>Reduced user frustration with quick, accurate responses</li>
    <li>Freed up time for human moderators to focus on high-level tasks</li>
    <li>Consistent information across the community</li>
    <li>Scalable solution that grows alongside adoption</li>
    <li>Deeper community engagement with personalized conversations</li>
</ul>

  </div>
</div>
</div>
</div>
</div>

{/* ---- */}
<div className="p-2  bg-body-tertiary rounded-3 pb-5 mb-5">
      <div className="container-fluid ">
        <div className="mx-auto px-auto">
<div className="card">
  <div className="card-body">
    <h5 className="card-title">
    How to use: 

</h5>
   <ul className="card-text">
   <li>Connect your wallet</li>
  <li>Choose a payment plan (we have disabled it for the hackathon)</li>
  <li>Upload the relevant documents</li>
  <li>Add the telegram bot from the link provided</li>
</ul>

  </div>
</div>
</div>
</div>
</div>

{/*  */}
    </div>
  );
};

export default Home;