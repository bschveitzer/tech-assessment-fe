
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
    height?: Nullable<string>;
    weight?: Nullable<string>;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
}

export interface EnrollParticipantResponse {
    id: string;
    eligible: boolean;
}

export interface GetParticipant {
    id: string;
    trialId?: Nullable<string>;
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
    participants?: Nullable<Participant[]>;
}

export type Participant = GetParticipant | EnrollParticipant;
type Nullable<T> = T | null;
