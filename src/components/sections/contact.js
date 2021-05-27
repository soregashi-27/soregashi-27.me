import useEffect from "react"

const Contact = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
  })

  return (
    <div>
      <h2>What's next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Please Contact me. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <a href="" className="email-link">
        Say Hi there!
      </a>
    </div>
  )
}

export default Contact
