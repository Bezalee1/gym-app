import Logo from "@/assets/Logo.png"


const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content w-5/6 mx-auto md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img src={Logo} alt="logo" />
                <p className="my-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nemo animi consectetur dolorum cupiditate, ipsam nulla magnam.</p>
                <p> &copy; Evogym All Rights Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <ul>
                    <li className="my-5">Home</li>
                    <li className="my-5">Careers</li>
                    <li className="my-5">Trainers</li>
                </ul>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h3 className="font-bold">Contact Us</h3>
                <p className="my-5">evolve-gym@example.com</p>
                <p>(333)345-6878</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer