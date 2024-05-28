import React, { useState } from 'react';

const HeroSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-9" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg" alt="" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button type="button" className="text-white" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                {expanded ? (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
              <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
            </nav>

            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a href="#" title="" className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
            </div>
          </div>

          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Products </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Features </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Pricing </a>
                <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a>
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a href="#" title="" className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full" role="button"> Start free trial </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto relativea sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Connecting Devs with Employers</h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

              <form action="#" method="POST" className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                      <svg className="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input type="email" name="" id="" placeholder="Try Java Developer, React Dev etc." className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0" />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button type="submit" className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90">Find A Developer</button>
                </div>
              </form>

              <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">Trusted by 50k+ users</p>

                <div className="flex items-center mt-3">
                  <div className="flex">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.14868 15.0346 9.46484 15.5496 9.46484H19.6803C20.8491 9.46484 21.3313 10.9543 20.3803 11.6626L17.0724 14.1396C16.6541 14.446 16.4763 14.9994 16.6371 15.4855L17.9204 19.4356C18.2797 20.5412 17.0204 21.4456 16.0694 20.7373L12.7615 18.2603C12.3432 17.954 11.6565 17.954 11.2383 18.2603L7.93037 20.7373C6.97937 21.4456 5.72011 20.5412 6.07937 19.4356L7.36274 15.4855C7.52348 14.9994 7.34566 14.446 6.92737 14.1396L3.61945 11.6626C2.66845 10.9543 3.15063 9.46484 4.31945 9.46484H8.45014C8.96511 9.46484 9.41437 9.14868 9.57511 8.66264L10.8586 4.71248Z"
                        fill="#FAB200"
                      ></path>
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.14868 15.0346 9.46484 15.5496 9.46484H19.6803C20.8491 9.46484 21.3313 10.9543 20.3803 11.6626L17.0724 14.1396C16.6541 14.446 16.4763 14.9994 16.6371 15.4855L17.9204 19.4356C18.2797 20.5412 17.0204 21.4456 16.0694 20.7373L12.7615 18.2603C12.3432 17.954 11.6565 17.954 11.2383 18.2603L7.93037 20.7373C6.97937 21.4456 5.72011 20.5412 6.07937 19.4356L7.36274 15.4855C7.52348 14.9994 7.34566 14.446 6.92737 14.1396L3.61945 11.6626C2.66845 10.9543 3.15063 9.46484 4.31945 9.46484H8.45014C8.96511 9.46484 9.41437 9.14868 9.57511 8.66264L10.8586 4.71248Z"
                        fill="#FAB200"
                      ></path>
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.14868 15.0346 9.46484 15.5496 9.46484H19.6803C20.8491 9.46484 21.3313 10.9543 20.3803 11.6626L17.0724 14.1396C16.6541 14.446 16.4763 14.9994 16.6371 15.4855L17.9204 19.4356C18.2797 20.5412 17.0204 21.4456 16.0694 20.7373L12.7615 18.2603C12.3432 17.954 11.6565 17.954 11.2383 18.2603L7.93037 20.7373C6.97937 21.4456 5.72011 20.5412 6.07937 19.4356L7.36274 15.4855C7.52348 14.9994 7.34566 14.446 6.92737 14.1396L3.61945 11.6626C2.66845 10.9543 3.15063 9.46484 4.31945 9.46484H8.45014C8.96511 9.46484 9.41437 9.14868 9.57511 8.66264L10.8586 4.71248Z"
                        fill="#FAB200"
                      ></path>
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.14868 15.0346 9.46484 15.5496 9.46484H19.6803C20.8491 9.46484 21.3313 10.9543 20.3803 11.6626L17.0724 14.1396C16.6541 14.446 16.4763 14.9994 16.6371 15.4855L17.9204 19.4356C18.2797 20.5412 17.0204 21.4456 16.0694 20.7373L12.7615 18.2603C12.3432 17.954 11.6565 17.954 11.2383 18.2603L7.93037 20.7373C6.97937 21.4456 5.72011 20.5412 6.07937 19.4356L7.36274 15.4855C7.52348 14.9994 7.34566 14.446 6.92737 14.1396L3.61945 11.6626C2.66845 10.9543 3.15063 9.46484 4.31945 9.46484H8.45014C8.96511 9.46484 9.41437 9.14868 9.57511 8.66264L10.8586 4.71248Z"
                        fill="#FAB200"
                      ></path>
                    </svg>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.14868 15.0346 9.46484 15.5496 9.46484H19.6803C20.8491 9.46484 21.3313 10.9543 20.3803 11.6626L17.0724 14.1396C16.6541 14.446 16.4763 14.9994 16.6371 15.4855L17.9204 19.4356C18.2797 20.5412 17.0204 21.4456 16.0694 20.7373L12.7615 18.2603C12.3432 17.954 11.6565 17.954 11.2383 18.2603L7.93037 20.7373C6.97937 21.4456 5.72011 20.5412 6.07937 19.4356L7.36274 15.4855C7.52348 14.9994 7.34566 14.446 6.92737 14.1396L3.61945 11.6626C2.66845 10.9543 3.15063 9.46484 4.31945 9.46484H8.45014C8.96511 9.46484 9.41437 9.14868 9.57511 8.66264L10.8586 4.71248Z"
                        fill="#FAB200"
                      ></path>
                    </svg>
                    <span className="text-gray-500 dark:text-gray-400">5.0</span>
                  </div>
                </div>
              </div>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                    email</label>
                  <input type="email" name="email" id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required="" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                  in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</main>
    </div>
  </div>
</div>
