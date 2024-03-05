/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FeedEventCreateFormInputValues = {
    userId?: string;
    sourceNodeId?: string;
    createdAt?: string;
    eventType?: string;
    title?: string;
    description?: string;
};
export declare type FeedEventCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    sourceNodeId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    eventType?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedEventCreateFormOverridesProps = {
    FeedEventCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    sourceNodeId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    eventType?: PrimitiveOverrideProps<SelectFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedEventCreateFormProps = React.PropsWithChildren<{
    overrides?: FeedEventCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FeedEventCreateFormInputValues) => FeedEventCreateFormInputValues;
    onSuccess?: (fields: FeedEventCreateFormInputValues) => void;
    onError?: (fields: FeedEventCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedEventCreateFormInputValues) => FeedEventCreateFormInputValues;
    onValidate?: FeedEventCreateFormValidationValues;
} & React.CSSProperties>;
export default function FeedEventCreateForm(props: FeedEventCreateFormProps): React.ReactElement;
