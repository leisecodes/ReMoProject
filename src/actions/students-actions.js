import * as service from '../services/students-service';

export const CREATE_STUDENT = 'CREATE_STUDENT';
export const FIND_ALL_STUDENTS = 'FIND_ALL_STUDENTS';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

export const createStudent = async (dispatch, student) => {}
export const findAllStudents = async (dispatch) => {
    const students = await service.findAllStudents();
    dispatch({
        type: FIND_ALL_STUDENTS,
        students
    });
}

export const updateStudent = async (dispatch, student) => {}
export const deleteStudent = async (dispatch, student) => {}
