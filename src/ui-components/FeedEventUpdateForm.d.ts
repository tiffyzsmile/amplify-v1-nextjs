/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FeedEvent } from "../API.ts";
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
export declare type FeedEventUpdateFormInputValues = {
    userId?: string;
    sourceNodeId?: string;
    createdAt?: string;
    eventType?: string;
    title?: string;
    description?: string;
};
export declare type FeedEventUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    sourceNodeId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    eventType?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeedEventUpdateFormOverridesProps = {
    FeedEventUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    sourceNodeId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    eventType?: PrimitiveOverrideProps<SelectFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FeedEventUpdateFormProps = React.PropsWithChildren<{
    overrides?: FeedEventUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    feedEvent?: FeedEvent;
    onSubmit?: (fields: FeedEventUpdateFormInputValues) => FeedEventUpdateFormInputValues;
    onSuccess?: (fields: FeedEventUpdateFormInputValues) => void;
    onError?: (fields: FeedEventUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FeedEventUpdateFormInputValues) => FeedEventUpdateFormInputValues;
    onValidate?: FeedEventUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FeedEventUpdateForm(props: FeedEventUpdateFormProps): React.ReactElement;
