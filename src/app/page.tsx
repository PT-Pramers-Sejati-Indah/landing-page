import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import {
  TabletSmartphone,
  Timer,
  Workflow
  // MessageCircle
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Digitalisasi Proses Notaris bersama{' '}
          <span style={{ color: '#2A4FD3' }}>Notive</span>
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
          Bersama Notive tingkatkan pengalaman dan kemudahan
          dalam proses ke-notariatan untuk kamu Notaris
          pintar.
        </Typography>

        {/* <div className="flex items-center space-x-4">
          <input
            className="border-gray-500 bg-black text-white py-2 px-4 rounded"
            type="email"
            placeholder="Masukkan email anda..."
          />
          <Button size="tiny" variant="ghost">
            {`Mulai Sekarang`}
          </Button>
        </div> */}
        <Link
          href="https://forms.gle/YV25LzNUW76sRGrX7"
          target="_blank"
        >
          <Button size="tiny" variant="ghost">
            {/* <MessageCircle
              size={24}
              style={{ marginRight: 8 }}
            />{' '} */}
            {`Mulai Sekarang`}
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Pandem.dev hero image"
          src="https://pbs.twimg.com/media/GQa1JLxboAAr7NO?format=jpg&name=4096x4096"
        />
      </div>
      <div className="flex flex-col md:pt-24 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Monitor Tampa Khawatir
          </Typography>
          <div className="flex md:flex-row flex-col gap-12">
            <Feature
              icon={<Timer size={24} />}
              headline="Kapanpun, Dimanapun"
              description="Aplikasi notaris berbasis cloud yang online 24/7, memastikan akses mudah dan cepat kapan saja dan di mana saja."
            />
            <Feature
              icon={<TabletSmartphone size={24} />}
              headline="Berbagai Platform"
              description="Notive memudahkan Anda dengan akses yang fleksibel dari laptop, komputer, dan smartphone. Nikmati kemudahan lebih dengan aplikasi khusus untuk iOS, Android, maupun Web."
            />
            <Feature
              icon={<Workflow size={24} />}
              headline="Keamanan Data"
              description="Kami menjaga keamanan data Anda dengan menerapkan langkah-langkah keamanan terbaik."
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-6 max-w-2xl items-center">
          <Typography className="max-w-2xl" variant="h1">
            Monitor Dimanapan Kapanpun
          </Typography>
          <Typography className="max-w-2xl" variant="p">
            Quickly link new on-call tickets to similar past
            incidents and their solutions. All directly in
            Slack the moment an incident happens.
          </Typography>
          <Image
            width={1024}
            height={632}
            alt="Pandem.dev hero image"
            src="/hero1.png"
          />
        </div> */}
        {/* <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Get in touch
          </Typography>
          <div>Book a demo, or hop on a call</div>
          <Link
            href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              {`Book now`}
            </Button>
          </Link>
        </div> */}
      </div>
    </div>
  )
}
