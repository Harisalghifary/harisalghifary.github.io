export default function TechStack() {
  return (
    <section className="flex items-center px-6 pt-10 lg:px-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex items-center space-x-4 mb-16">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/clover-svgrepo-com.svg" alt="icon" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">MY STACK</h2>
        </div>

        <div className="space-y-16">
          {/* Left side - Categories */}
          <div className="flex gap-10 items-start">
            <div className="w-1/3">
              <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                FRONTEND
              </h3>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  className="w-6 h-6"
                />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  className="w-6 h-6"
                />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  className="w-6 h-6"
                />
                <span>React</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                  className="w-6 h-6 invert"
                />
                <span>Next.js</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  className="w-6 h-6"
                />
                <span>Redux</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
                  className="w-6 h-6"
                />
                <span>Vue.js</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  className="w-6 h-6"
                />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  className="w-6 h-6"
                />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  className="w-6 h-6"
                />
                <span>SASS</span>
              </div>
            </div>
          </div>

          <section className="flex gap-10 items-start">
            <div className="w-1/3">
              <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                BACKEND
              </h3>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
              {[
                {
                  name: "Golang",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
                },
                {
                  name: "Python",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                },
                {
                  name: "Node.js",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                },
                {
                  name: "Laravel",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
                },
                {
                  name: "Solidity",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg",
                },
                {
                  name: "Cosmos SDK",
                  icon: "https://cryptologos.cc/logos/cosmos-atom-logo.png?v=026",
                },
                {
                  name: "GraphQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
                },
                {
                  name: "GRPC",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grpc/grpc-original.svg",
                },
              ].map((tech) => (
                <div key={tech.name} className="flex items-center gap-3">
                  <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="flex gap-10 items-start">
            <div className="w-1/3">
              <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                DATABASE
              </h3>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
              {[
                {
                  name: "SQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
                },
                {
                  name: "PostgreSQL",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
                },
                {
                  name: "MongoDB",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                },
                {
                  name: "Firebase",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                },
                {
                  name: "Elastic Search",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg",
                },
              ].map((db) => (
                <div key={db.name} className="flex items-center gap-3">
                  <img src={db.icon} alt={db.name} className="w-6 h-6" />
                  <span>{db.name}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="flex gap-10 items-start">
            <div className="w-1/3">
              <h3 className="text-4xl lg:text-4xl font-bold text-gray-400 mb-8">
                TOOLS
              </h3>
            </div>
            <div className="w-2/3 grid grid-cols-3 gap-6 text-lg">
              {[
                {
                  name: "Git",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
                },
                {
                  name: "Docker",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
                },
                {
                  name: "AWS",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
                },
                {
                  name: "GCP",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg",
                },
                {
                  name: "Netlify",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
                },
                {
                  name: "Postman",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
                },
                {
                  name: "Ansible",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg",
                },
                {
                  name: "Figma",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
                },
                {
                  name: "Grafana",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
                },
                {
                  name: "Notion",
                  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
                },
              ].map((tool) => (
                <div key={tool.name} className="flex items-center gap-3">
                  <img src={tool.icon} alt={tool.name} className="w-6 h-6" />
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
