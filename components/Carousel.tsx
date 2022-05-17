import React, { useState, createContext, useCallback, useEffect } from 'react';
import { EmblaCarouselType } from 'embla-carousel-react';
import useEmblaCarousel from 'embla-carousel-react';
import ClassNames from 'embla-carousel-class-names';
import Autoplay from 'embla-carousel-autoplay';
import styles from './Carousel.module.css';

interface ContextValue {
	embla: EmblaCarouselType | undefined;
	selectedIndex: number;
}

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const CarouselContext = createContext<ContextValue>({
	embla: undefined,
	selectedIndex: -1,
});

export const Carousel: React.FC<Props> = ({ children, className }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [viewportRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'center',
			skipSnaps: false,
		},
		[ClassNames(), Autoplay()]
	);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi, setSelectedIndex]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	return (
		<CarouselContext.Provider value={{ embla: emblaApi, selectedIndex }}>
			<div
				className={`${styles.viewport} w-full overflow-hidden ${className}`}
				ref={viewportRef}>
				<div className={`${styles.container} flex`}>{children}</div>
			</div>
		</CarouselContext.Provider>
	);
};
