function AffRefScreen() {
  const ammount = `$10`
  return <div className=" flex flex-col text-center items-center">

    <div className="text-center items-center mb-10">

      <h1 className="text-section-heading pb-5"> Affiliate Refferals</h1>
      <p className="text-body">Please sign up to generate affiliate referral and earn money by referring clients to me.  </p>
    </div>
    <div className=" flex flex-col items-center rounded-[2rem] bg-sm-primary">
      <div>
        <button>Log Out</button>
      </div>

      <h1 className="text-section-heading pb-4">Heres your affiliate link</h1>
      <div className="flex justify-center w-[54rem] rounded-[2rem] shadow-xl relative py-4 px-14 bg-primary" > refferal link <span className="absolute right-3">copy</span></div>
      <div className=" text-center flex flex-col justify-center items-center w-[54rem] h-[30rem] rounded-[2rem] bg-secondary  mx-16 my-10">
        <h1 className="text-section-heading ">Account Balance</h1>
        <div className="text-section-heading font-bold px-28 py-4  border-b-2 [border-image:linear-gradient(to_top_right,#8D611D,#B79766)_30]  border-solid border-transparent w-fit bg-gradient-to-r from-[#8D611D] to-[#B79766] inline-block text-transparent bg-clip-text">{ammount}</div>
        <div className=" m-10 border-[#8D611D] rounded-[1rem] border-2" style={{ backgroundColor: 'rgb(255, 210, 141, 0.05)' }}>
          <button className=" font-bold text-body py-6 border-double border-4 border-transparent bg-origin-border px-40  bg-gradient-to-r from-[#8D611D] to-[#B79766] inline-block text-transparent bg-clip-text">Withdraw Funds</button>
        </div>
      </div>

    </div>
  </div>
}

export default AffRefScreen
