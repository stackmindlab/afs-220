import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">Our Vision and Values</h2>
                    <p className="text-lg">
                    Welcome to Sushi Hub (SH)! Embark on a global sushi journey with us. Our menu showcases exquisite sushi varieties from around the world, each reflecting its authentic origin. From Japan's delicate rolls to Korea vibrant creations, and Mexico's fusion wonders, we curate the Best Sushi. Our iconic "SH" logo represents our commitment to delivering top-notch sushi experiences. Join us at Sushi Hub, your hub for the finest sushi from across the globe.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}