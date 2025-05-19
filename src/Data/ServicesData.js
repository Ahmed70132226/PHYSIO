import chiropracticImg from '../assets/chiropractic.webp';
import ExcerciseImg from '../assets/Excercise.webp';
import massageImg from '../assets/massage.webp';
import needlingImg from '../assets/needling.webp';
import SportsImg from '../assets/Sports.webp';

const ServicesData = [
  {
    title: 'Chiropractic',
    description:
      'Our professional chiropractors specialize in gentle spinal manipulation and holistic musculoskeletal care. Chiropractic care can relieve back pain, neck pain, headaches, as well as improve posture, mobility and overall spinal health. We perform spinal adjustments, muscle release, and kinesiology taping to ensure your body functions at its optimum.',
    image: chiropracticImg,
    link: '/chiropractic',
  },
  {
    title: 'Exercise Physiology',
    description:
      'Our accredited Exercise Physiologists provide customized programs to help manage and prevent chronic diseases like diabetes, obesity, cardiovascular disease, and osteoporosis. We cover everything from strength and conditioning to rehab exercises. These programs are carefully designed to improve mobility, endurance, strength, and encourage a healthy, sustainable lifestyle.',
    image: ExcerciseImg,
    link: '/exercise-physiology',
  },
  {
    title: 'Massage Therapy',
    description:
      'Professional massage therapy services to promote relaxation, reduce stress, and improve physical health. Our therapists specialize in deep tissue, Swedish, remedial, and sports massage techniques. Regular massage therapy reduces muscle tension, increases circulation, and promotes mental well-being.',
    image: massageImg,
    link: '/massage-therapy',
  },
  {
    title: 'Dry Needling',
    description:
      'Targeted dry needling is an advanced technique to treat muscle tightness and chronic pain. Our physiotherapists insert fine needles into trigger points to release tension, improve blood flow, and promote faster healing. Effective for treating tension headaches, shoulder, and lower back pain.',
    image: needlingImg,
    link: '/dry-needling',
  },
  {
    title: 'Sports Physiotherapy',
    description:
      'Our Sports Physiotherapists use specific techniques aimed at both amateur and professional athletes to prevent, diagnose and treat sports-related injuries. From injury management to customized rehabilitation and performance enhancement programs, we help athletes get back to their A-game, pain-free.',
    image: SportsImg,
    link: '/sports-physiotherapy',
  },
];

export default ServicesData;
