'use client';
import Card from './components/Card';
import Nav from './components/Nav';
import { useRouter } from 'next/navigation';

export default function Home() {

  return (
  <> 
    <Nav />
    <main className="container" style={{paddingTop: "0"}}>
      <div className="grid">
        <Card title="Filip" imgSrc="/filip.jpg" />
        <Card title="Nikola" imgSrc="/nikola.jpg" />
      </div>
    </main>
  </>
  )
}
