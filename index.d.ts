declare module 'lebanon-utils' {
    declare function getOperator(phone: number): 'Touch' | 'Alfa' | 'Ogero';
    declare function isAlfaOperator(phone: number): boolean;
    declare function isTouchOperator(phone: number): boolean;
    declare function isLandline(phone: number): boolean;
    declare function isMobile(phone: number): boolean;
    declare function isValid(phone: number): boolean;
}