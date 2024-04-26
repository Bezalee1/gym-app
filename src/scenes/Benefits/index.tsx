import HText from "@/shared/HText"
import { SelectedPage, benefitType } from "@/shared/types"
import { HomeModernIcon, AcademicCapIcon, UserGroupIcon } from "@heroicons/react/16/solid"
import { motion } from 'framer-motion'
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"


const benefits: Array<benefitType>  = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum sint nulla non sunt necessitatibus odio possimus est ab numquam? Esse voluptatibus pariatur explicabo eius amet! Eius voluptatem nihil labore?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum sint nulla non sunt necessitatibus odio possimus est ab numquam? Esse voluptatibus pariatur explicabo eius amet! Eius voluptatem nihil labore?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum sint nulla non sunt necessitatibus odio possimus est ab numquam? Esse voluptatibus pariatur explicabo eius amet! Eius voluptatem nihil labore?"
    }
]

const container = {
    hidden:{},
    visible:{
        transition: {staggerChildren: 0.2}
    }
}


type Props = {
    setSelectedPage: ((value: SelectedPage)=>void)
}


const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
            onViewportEnter = {()=>setSelectedPage(SelectedPage.Benefits)}
        >
            {/**Header */}
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.4}}
                transition={{duration: 0.4}}
                variants={{
                    hidden: {opacity: 0, x: -50},
                    visible: {opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="py-5 text-sm">
                    We provide world class fitness equipment, trainers and classes to help you get your ultimate fitness goals with ease. We provide true care into each and every member
                </p>
            </motion.div>

            {/**Benefits */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount:0.5}}
                variants={container}
            >
                {benefits.map((benefit: benefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/**Graphics and Description */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                
                {/**Graphic */}
                <img 
                    src={BenefitsPageGraphic} alt="" 
                    className="mx-auto"
                />

                {/**Description */}
                <div>
                    {/**Title */}
                    <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.4}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}
                        >
                            <HText>
                                MILLIONS OF HAPPY MEMBERS GETTING {" "} <span className="text-primary-500">FIT</span>
                            </HText>
                        </motion.div>
                    </div>
                    {/**descript */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.4}}
                            variants={{
                                hidden: {opacity: 0, x: -50},
                                visible: {opacity: 1, x: 0},
                            }}
                        >
                            <p className="my-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a tempore non dignissimos quis sit rerum quaerat culpa aspernatur, magni, tenetur in, deleniti minus pariatur quibusdam voluptatibus adipisci! Quidem provident totam, id, ab doloremque numquam libero aliquid quos officiis blanditiis cupiditate culpa accusantium deleniti odio voluptatem maiores ipsa quo ut fuga animi rem. 
                            </p>
                            <p className="mb-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quia, facere similique veniam minima consectetur officiis voluptate ratione quidem necessitatibus culpa vitae, eveniet ad est esse soluta cumque enim expedita eius doloribus molestiae quae voluptates consequatur. Quibusdam laboriosam, in vitae debitis doloribus expedita aliquid dolorem!
                            </p>
                        </motion.div>
                    {/**button */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:z-[-1] before:-bottom-20 before:right-40 before:content-sparkles">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

    </section>
  ) 
}

export default Benefits