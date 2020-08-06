import Link from 'next/link'

const About =()=> {
  return(
    <div>
    <h1>welcome to About bage</h1>
    <button>
    <Link href = '/'>
    <a>
    go back
    </a>
    </Link>
    </button>
    </div>
  )
}
export default About