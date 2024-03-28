
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

export interface IMutation {
    enrollParticipant(): EnrollParticipant[] | Promise<EnrollParticipant[]>;
}

export interface EnrollParticipant {
    name: string;
    trialId: string;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
}

export interface EnrollParticipantResponse {
    id: string;
    isEligible: boolean;
}

export interface GetParticipant {
    id: string;
    trialId?: Nullable<string>;
}

export interface Participant {
    id: string;
    name: string;
    trialId: string;
    trial: Trial;
    medicalFile: MedicalFile;
}

export interface MedicalFile {
    id: string;
    participant: Participant;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    participantId: string;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
}

export interface Trial {
    id: string;
    name: string;
    participants?: Nullable<Participant[]>;
}

type Nullable<T> = T | null;
