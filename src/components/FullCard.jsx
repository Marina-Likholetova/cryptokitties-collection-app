import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { get_cats_api } from "../data/api";
import { IoArrowBack } from "react-icons/io5";
import useImageCheck from "../hooks/useImageCheck";
import axios from "axios";



export default function FullCard() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [catInfo, setCatInfo] = useState();
    const [url, setUrl] = useState();
    const urlCheked = useImageCheck(url);


    useEffect(() => {
        axios({ url: get_cats_api + id })
            .then((res) => {
                setCatInfo(res.data)
                setUrl(res.data.image_url)
            })
    }, [id]);


  
    return (
        <>
            <div className="full-card-top">
                <button className="btn-back" onClick={() => navigate(-1)}>
                    <IoArrowBack />
                    Back
                </button>
                <h2>Cats info</h2>
            </div>
            <div className="full-card-item">
                <div className="item-image">
                    { urlCheked
                        ? <img src={urlCheked} alt={catInfo.name} />
                        : <div className="lds-dual-ring"></div>
                    }
                </div>

                {catInfo && 
                    <ul className="info-item">
                        <li>
                            <strong>Name: </strong> {catInfo.name}
                        </li>
                        <li>
                            <strong>Category: </strong> {catInfo.category}
                        </li>
                        <li>
                            <strong>Price: </strong> {catInfo.price}
                        </li>
                        <li>
                            <strong>Birth: </strong> {new Date(catInfo.created_at).toLocaleDateString()}
                        </li>
                    </ul>
                }
            </div>
        </>
    );
}
