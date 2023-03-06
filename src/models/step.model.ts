export interface Step {
    element: string | HTMLElement;
    comment: string;
    option?: StepOptions;
}

export interface StepOptions {
    position?: 'top' | 'left' | 'right' | 'bottom';
    fontsize?: string;
    fontweight?: string;
    gap?: number;
}