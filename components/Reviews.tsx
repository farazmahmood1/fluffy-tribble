
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { REVIEWS } from '../constants';

const ReviewCard: React.FC<{ review: typeof REVIEWS[0], index: number }> = ({ review, index }) => {
  return (
    <div className="w-[85vw] md:w-[40vw] flex-shrink-0">
      <motion.div
        className="h-full group relative p-10 lg:p-12 border border-black/5 bg-white/40 backdrop-blur-sm rounded-[40px] hover:bg-white transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
      >
        {/* Platform Badge */}
        <div className="absolute top-8 right-10 text-[10px] font-bold uppercase tracking-[0.3em] opacity-20 group-hover:opacity-40 transition-opacity">
          {review.platform}
        </div>

        {/* Quote Icon */}
        <div className="mb-10 text-[#d9ff3f] opacity-40 group-hover:opacity-100 transition-opacity duration-500">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4 3.638-4 5.849h3.999v10h-9.999z" />
          </svg>
        </div>

        <p className="text-xl md:text-2xl font-inter font-light text-black/80 leading-relaxed mb-12 tracking-tight line-clamp-4">
          "{review.content}"
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-syne font-bold text-black mb-1">{review.name}</h4>
            <p className="text-xs uppercase tracking-widest font-bold text-black/30">{review.role}</p>
          </div>
          
          <div className="flex gap-1">
            {[...Array(review.rating)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#d9ff3f]" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the horizontal translation. 
  // We have 5 cards. On desktop each is 40vw. Total width = 5 * 40vw = 200vw.
  // We want to scroll such that the last card is visible.
  // Viewport is 100vw. So scroll from 0 to -(200vw - 100vw + padding).
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#e5e5e5]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-syne font-black text-black/[0.01] pointer-events-none select-none z-0">
          REVIEWS
        </div>

        <div className="px-8 lg:px-24 mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold uppercase tracking-[0.6em] opacity-30 mb-6"
          >
            Kind Words
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-syne font-bold leading-tight tracking-tighter max-w-2xl"
          >
            Driving impact for brands worldwide.
          </motion.h3>
        </div>

        {/* Carousel Container */}
        <div className="relative z-10">
          <motion.div style={{ x }} className="flex gap-8 px-8 lg:px-24">
            {REVIEWS.map((review, idx) => (
              <ReviewCard key={idx} review={review} index={idx} />
            ))}
            {/* End Spacer for cleaner finish */}
            <div className="w-[10vw] flex-shrink-0" />
          </motion.div>
        </div>

        {/* Scroll Progress Indicator for the Carousel */}
        <div className="absolute bottom-20 left-8 lg:left-24 right-8 lg:right-24 h-px bg-black/5">
          <motion.div 
            style={{ scaleX: scrollYProgress }} 
            className="absolute top-0 left-0 h-full w-full bg-[#d9ff3f] origin-left"
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
