'use client'
import GitHubIcon from '@mui/icons-material/GitHub';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Tooltip } from '@mui/material';
import SocialSelector from './components/SocialSelector';
export default function SectionLink() {
  return <section id='link' className=" p-[20px] flex justify-end items-center linear-gradient-to-r from-[#008fff] to-[#338bcf]">

    <SocialSelector />
  </section>
} 