import Image from "next/image";
import Link from "next/link";

export default function Sample13() {
    return (
        <section className="container px-5 py-10 mx-auto">
            <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
                    <Link href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                        View all
                    </Link>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src="/sample01.svg" alt="Neil image" width={32} height={32} />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {/* テキスト300文字 */}
                                        Neil Sims is a software engineer with over 10 years of experience in full-stack development. He has worked on various projects, including web applications, mobile apps, and cloud-based solutions. His expertise lies in JavaScript frameworks, particularly React and Node.js. Neil is passionate about coding and enjoys solving complex problems through innovative solutions.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src="/sample01.svg" alt="Neil image" width={32} height={32} />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-lg font-medium text-gray-900 truncate dark:text-white">
                                        Neil Sims
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {/* テキスト300文字 */}
                                        Neil Sims is a software engineer with over 10 years of experience in full-stack development. He has worked on various projects, including web applications, mobile apps, and cloud-based solutions. His expertise lies in JavaScript frameworks, particularly React and Node.js. Neil is passionate about coding and enjoys solving complex problems through innovative solutions.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="border-b my-2"></p>
            <div className="mt-6 flow-root">
                <div className="divide-y divide-gray-200 dark:divide-gray-800 border border-gray-200 rounded-lg p-5">
                    <div className="space-y-4 py-2 md:py-4">
                        <div className="grid gap-4">
                            <div>
                                <span className="inline-block rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300 md:mb-0"> 3 answers </span>
                            </div>
                            <Link href="#" className="text-xl font-semibold text-gray-900 hover:underline dark:text-white">“The specs say this model has 2 USB ports. The one I received has none. Are they hidden somewhere?”</Link>
                        </div>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">It’s a USB-C port it’s a smaller port. Not the regular size USB port. See the picture below. It fits the newer Apple chargers.</p>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Answered 1 day ago by
                            <Link href="#" className="text-gray-900 hover:underline dark:text-white">Bonnie Green</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}