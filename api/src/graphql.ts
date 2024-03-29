
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface EnrollParticipant {
    name: string;
    trialId: string;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
}

export interface IQuery {
    participants(): Participant[] | Promise<Participant[]>;
    trials(): Trial[] | Promise<Trial[]>;
}

export interface IMutation {
    enrollParticipant(participant: EnrollParticipant): Nullable<EnrollParticipantResponse> | Promise<Nullable<EnrollParticipantResponse>>;
}

export interface EnrollParticipantResponse {
    id?: Nullable<string>;
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
    createdAt: string;
}

export interface MedicalFile {
    id: string;
    participant: Participant;
    height?: Nullable<number>;
    weight?: Nullable<number>;
    participantId: string;
    hasDiabetes?: Nullable<boolean>;
    hadCovid?: Nullable<boolean>;
    createdAt: string;
}

export interface ParticipantsCount {
    participants: number;
}

export interface Trial {
    id: string;
    name: string;
    participants?: Nullable<Participant[]>;
    _count?: Nullable<ParticipantsCount>;
    createdAt: string;
}

type Nullable<T> = T | null;
