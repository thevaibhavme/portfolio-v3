import Link from "next/link";
import styles from "./blogs.module.css";
import { BlogsData } from "../../Components/Blogs/blogsData";

export default function Blogs() {
    return (
        <>
            <div className={styles.blogsContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.heading}>
                        Blogs
                    </div>
                </div>
                <div className={styles.blogsList}>
                    {
                        BlogsData.map((blog, index) => (
                            <Link
                                // target="_blank"
                                href={blog.src} key={index}
                                className={styles.blogListItem}
                                style={{ "--index": index }}
                            >
                                <div className={styles.blogTitle}>{blog.title}</div>
                                <div className={styles.blogDate}>{blog.date}</div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}