import GitHubIcon from '@mui/icons-material/GitHub';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
export default function SectionLink() {
  return <section id='link' className="w-full h-[50px] p-[20px] flex justify-end items-center linear-gradient-to-r from-[#008fff] to-[#338bcf]">
    <div className='flex gap-[5px] *:cursor-pointer'>
      <span>
        <AutoStoriesIcon></AutoStoriesIcon>
      </span>
      <span>
        <GitHubIcon ></GitHubIcon>
      </span>

    </div>
  </section>
} 