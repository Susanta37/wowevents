import { SectionWrapper } from '@/components/SectionWrapper';

export function MapSection() {
    return (
        <SectionWrapper className="mx-auto max-w-[1400px] px-6 pb-32 lg:px-10">
            <div className="overflow-hidden rounded-[1.75rem] border border-white/[0.08] shadow-[0_60px_120px_-76px_rgb(212_175_55_/_0.32)]">
                <iframe
                    title="WOW Events Kolkata — map preview"
                    className="h-[min(56vh,480px)] w-full grayscale-[42%]"
                    loading="lazy"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58944.57978743736!2d88.3486027!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02771346ae939d%3A0xc52e750b721e0466!2sPark%20St%20Area%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1730000000000!5m2!1sen!2sin"
                />
            </div>
        </SectionWrapper>
    );
}
