import { useRouter } from "next/navigation"
import { CardImage, CardInfo } from "../Common/Card";
const TrendingCard = ({ id,
    category,
    rating,
    src,
    title,
    year, }) => {
    const router = useRouter();
    const handleClick = () => {
        if (category === 'movie') {
            router.push(`/movie/${id}`)
        } else if (category === 'tv') {
            router.push(`/tv/${id}`)
        }
    }
    return (
        <div className='relative w-full cursor-pointer' onClick={handleClick}>
            <CardImage isTrending src={src} alt={title} />
            <CardInfo
                isTrending
                id={id}
                category={category}
                rating={rating}
                title={title}
                year={year}
            />
        </div>
    )
}

export default TrendingCard