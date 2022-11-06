import GuyFawkes from '../assets/guy-fawkes-mask.jpeg'
import Sunrise from '../assets/sunrise.jpeg'
import Lottie from 'lottie-react'
import SaveBitcoin from '../assets/save-your-bitcoin.json'

const Intro = () => {
  return (
    <>
      <section className="bg-black flex justify-center text-white py-20">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="lg:p-8 lg:px-20">
            <h1 className="lg:text-6xl font-extrabold my-4 lg:w-4/5">
              On October 31st, 2008, a{' '}
              <span className="text-green-500">mysterious</span> user by the
              name of <span className="text-orange-500">Satoshi Nakamoto</span>
            </h1>
            <p className="lg:w-4/5 text-2xl leading-8">
              uploaded a paper entitled{' '}
              <span className="text-gray-400">
                "Bitcoin: A Peer-To-Peer Electronic Cash System"
              </span>{' '}
              to a cryptography mailing list on{' '}
              <span className="mono text-blue-500">metzdowd.com</span>. The
              ideas contained within that document would lay down the{' '}
              <span className="text-blue-500">blueprint</span> for a new
              monetary system that does not require{' '}
              <span className="text-gray-500">trusting</span> centralized
              authorities to hold our money.
            </p>
            <div className="my-8 space-x-4">
              <a href="">
                <button className="p-2 px-4 rounded border border-gray-700">
                  Self-Custody
                </button>
              </a>
              <a href="">
                <button className="p-2 px-4 rounded border border-gray-700">
                  Learn More
                </button>
              </a>
            </div>
          </div>
          <div>
            <img src={GuyFawkes} alt="" />
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-12">
        <div className="grid place-items-center">
          <div className="flex space-x-4 my-8">
            <img src="" alt="" className="p-8 rounded-full border" />
            <div>
              <h2 className="text-2xl">Satoshi Nakamoto</h2>
              <h3>Creator</h3>
            </div>
          </div>
          <div className="grid place-items-center">
            <p className="lg:w-1/4 text-4xl text-center leading-10">
              "The nature of Bitcoin is such that once version 0.1 was released,
              the core design was set in stone for the rest of its lifetime."
            </p>
          </div>
        </div>
      </section>
      <div
        className="gray grid place-items-center border-b border-green-500"
        id="save-bitcoin"
      >
        <Lottie animationData={SaveBitcoin} />
      </div>
    </>
  )
}

export default Intro
