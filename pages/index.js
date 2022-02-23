import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import '../styles/globals.css'


export default function Home() {
  return (
 <div className="bg-black h-full" >
      <Head>
        <title>Stegan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black h-full">

      <h1
  className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-400"
>
 STEGAN
</h1>
         
        <p className="description py-10 font-light text-gray-400">
        A marketplace for sharing encrypted and fully owned NFTs.
        Share public NFTs that are only viewable and decipherable by the owner <br/>

<span>HINT: </span>A stegan NFT is an image that is hidden within another image.
        
       
       <p className="uppercase text-gray-500 mt-4 text-xs">coming soon</p>
       <br/>

       <button className="text-base bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-2 my-2 mx-2 text-white  rounded-lg">Join Waitlist</button> 
         
       <div className='text-white p-2 mx-2 my-2 rounded-lg'>
  <a className="donate-with-crypto text-base bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 p-2 my-2 mx-2 text-white  rounded-lg" 
     href="https://commerce.coinbase.com/checkout/63b61224-a61e-42fb-adb1-19bb1b55fc8f">
    Donate with Crypto
  </a>
  <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807">
  </script>
</div>
        </p>
          

        {/* <div className="grid">
          <a  className="card">
          
            <h3>MF DOOM </h3>
            <p>Currently Playing Hooks</p>
          </a>
         
 
            <p><b>50,123 </b>  Currently Listening</p>
        

          <a
            className="card"
          >  <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>

        </div> */}
   <iframe src="https://my.spline.design/substrate-3733a659a12b585df6da0e2135838bf9/" frameborder='0' height="100%" width="100%"/>
     
     </main>

   

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: #000;
        }
  

        a {
          color: inherit;
          text-decoration: none;
        }
        .button {
          background: #555252;
          color: #CDCDCD;
          padding: 8px;
          justify-content: center;
          text-align: center;
          border-radius: 16px;
          display: flex;
          width: 200px;
          }
         .button img {
           margin: 6px;
           width: 20px;
         } 
         .buttonred {
         background: linear-gradient(to right, #f32170, 
                    #ff6b08, #ff23cf, #800080); 
           -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
          color: #fff;
          padding: 8px;
          justify-content: center;
          text-align: center;
          border-radius: 16px;
          display: flex;
          width: 150px;
          }
         .doom {
          margin: 0;
          line-height: 1.15;
          font-size: 3rem;
          margin-top: 2px;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
          
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          background: linear-gradient(to right, #f32170, 
                    #ff6b08, #ff23cf, #800080); 
           -webkit-text-fill-color: transparent; 
            -webkit-background-clip: text; 
        }
        
        .title,
        .description {
          text-align: center;
        }
        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .vynil {
          width: 50%;
          padding: 4px;
        }
        .login {
          justify-content-between;
          padding: 4px;
        }
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          justify-content: center;
          border-radius: 5px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }
        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }
        .logo {
          height: 1em;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #000;
          font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
