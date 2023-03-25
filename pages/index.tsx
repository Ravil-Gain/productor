import { LoginButton } from '@/components/LoginButton';
import { LogoutButton } from '@/components/LogoutButton';
import Head from 'next/head'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Productor</title>
        <meta name="description" content="This is an Productor App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div>
            <LoginButton />
            <br></br>
            <LogoutButton />
          </div>
        </div>
      </main>
    </div>
  )
}