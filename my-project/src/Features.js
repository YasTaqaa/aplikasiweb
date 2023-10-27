
import Navbar from './Navbar';

const features = []

export default function Example() {
  return (
    <div className="overflow-hidden bg-white">

        <Navbar />
        
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              
              <p className="mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Aslinya BADASSS</p>
              <p className="mt-3 text-lg leading-8 text-gray-600">
                Jalan Pake Kaki
              </p>
              <p>
                <img src="https://media.discordapp.net/attachments/1077839624099086366/1167261368328658994/FB_IMG_1698042411162.jpg?ex=654d7bdc&is=653b06dc&hm=ef8f1f3a09d31ec59b6918c79b4bda520bf808e372eb68387db1c9ded6e4b42d&=&width=657&height=662"  height={300} width={200}/>
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <p>             
            <img src="https://media.discordapp.net/attachments/1077839624099086366/1166926045526630400/jing_liu.png?ex=654c4391&is=6539ce91&hm=139fe4b709d4c5e9f4230a3b7cf638877876e5b96ba690b0bdd6f200fb0e70f9&=&width=1061&height=662" height={500} width={1000}/>
          </p>
        </div>
      </div>
    </div>
  )
}
