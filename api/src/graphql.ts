
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface IQuery {
    participants(): Participant[] | Promise<Participant[]>;
    trials(): Trial[] | Promise<Trial[]>;
}

export interface Participant {
    id: string;
    name: string;
    trial: Trial;
    trialId?: Nullable<string>;
    medicalFile?: Nullable<MedicalFile>;
}

export interface MedicalFile {
    id: string;
    participant: Participant;
    height?: Nullable<string>;
    weight?: Nullable<string>;
    participantId?: Nullable<string>;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
}

export interface Trial {
    id: string;
    name: string;
    participants: Participant[];
}

type Nullable<T> = T | null;
